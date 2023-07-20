import './index.css'
import { read, utils } from 'xlsx'
import { renderAsync } from "docx-preview";
export default {
  props: {
    src: String,
    type: String
  },

  async mounted() {
    const {src, type} = this
    if (src.endsWith('.xlsx') || type === 'xlsx') {
      const f = await fetch(src)
      const _buffer = await f.arrayBuffer()
      const wb = read(_buffer)
      this.$refs.container.innerHTML = utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]])
    } else if (src.endsWith('.docx') || type === 'docx') {
      const f = await fetch(src)
      const _buffer = await f.blob()
      renderAsync(_buffer, this.$refs.container)
    }
  },

  render() {
    const {src, type} = this
    if (src.endsWith('.pdf') || type === 'pdf') {
      return <embed class="kp-ofd" src={src} />
    }

    return <div class="kp-ofd" ref="container"></div>
  }
}