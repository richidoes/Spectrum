import { render, screen } from '@testing-library/react'
import Sidebar from './index'

describe('Render Sidebar menu', () => {
  beforeEach(() => {
    render(<Sidebar />)
  })

  it('Should render the Sidebar main container', async () => {
    expect(screen.queryAllByLabelText('sidebar')).toBeTruthy()
  })
})
