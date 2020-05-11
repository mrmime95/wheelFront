import React from 'react'
import SelectField from './index'
import Form from '../../index'
import { range } from '../../../../utils/number'

export default {
  title: 'Form/Fields/SelectField',
}

export const DefaultView = () => (
  <Form initialValues={{ numbers: 0 }} onSubmit={(val) => console.log(val)}>
    {() => (
      <>
        <SelectField name="numbers" options={range(0, 5).map((number) => ({ value: number, label: number }))} />
        <button type="submit">Submut</button>
      </>
    )}
  </Form>
)
