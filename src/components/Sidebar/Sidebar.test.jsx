import { render, screen } from '@testing-library/react'
import Sidebar from './index'

describe('<App />', () => {
  beforeEach(() => {
    render(<Sidebar />)
  })

  it('render sidebar container', async () => {
    expect(screen.queryAllByLabelText('sidebar')).toBeTruthy()
  })
})
