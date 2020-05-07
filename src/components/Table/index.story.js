import React from 'react'
import Table from './index'
import { range } from '../../utils/number'

export default {
  title: 'Table',
}

export const DefaultView = () => <Table data={range(0, 30)}>{(id) => <div key={id}>Row{id}</div>}</Table>

export const withError = () => <Table error errorText="The table is empty" />
