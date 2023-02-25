/* ----------------------------------------------------*/
//  Description: Employees controller
//  Author: Victor Viscarra
//  Date: 2023-02-23
/* ----------------------------------------------------*/
import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query('select * from employee')
    res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Something goes wrong' })
  }
}

export const getEmployeeById = async (req, res) => {
  try {
    const id = req.params.id
    const [rows] = await pool.query('select * from employee where id=?', [id])
    if (rows.length <= 0) {
      return res.status(404).json({ message: 'Employee not found' })
    }
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' })
  }
}

export const insertEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body
    const [
      rows,
    ] = await pool.query('insert into employee (name, salary) values (?,?)', [
      name,
      salary,
    ])

    const [result] = await pool.query('select * from employee where id=?', [
      rows.insertId,
    ])
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' })
  }
}

export const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id
    const { name, salary } = req.body
    const [
      result,
    ] = await pool.query(
      'update employee set name = ifnull(?, name), salary = ifnull(?, salary) where id = ?',
      [name, salary, id],
    )

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: 'Employee not found' })

    const [rows] = await pool.query('select * from employee where id=?', [id])

    res.json(rows[0]) // Todo ok pero no devuelvo nada
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' })
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id
    const [result] = await pool.query('delete from employee where id = ?', [id])
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: 'Employee not found' })

    res.sendStatus(204) // Todo ok pero no devuelvo nada
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' })
  }
}
