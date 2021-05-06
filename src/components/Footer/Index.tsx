import './Index.sass'
import Button from '@material-ui/core/Button'
import { PlayArrow } from '@material-ui/icons'

function Footer() {
  return (
    <footer className="Footer flexbox">
      <Button className="Footer-playIcon center" variant="contained" color="primary">
        <PlayArrow />
      </Button>
    </footer>
  )
}

export default Footer
