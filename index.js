'use strict'

module.exports = (pluginContext) => {
  const shell = pluginContext.shell
  const app = pluginContext.app

  function search (query, res) {
    const query_trim = query.trim()

    if (query_trim.length === 0) {
      return
    }

    res.add({
      id: query_trim,
      payload: 'search',
      title: query_trim,
      desc: 'Search docsets'
    })
  }

  function execute (id, payload) {
    if (payload !== 'search') {
      return
    }
    shell.openExternal(`dash://${id}`)
    app.close()
  }

  return { search, execute }
}
