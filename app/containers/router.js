import React, { Suspense } from 'react'
import { Router, Route } from 'react-router-dom'
import { HomePage, TodoPage } from 'containers'
import history from 'containers/history'
import Circular from 'components/Circular'

export default function Routers() {
  return (
    <Router history={history}>
      <Suspense fallback={<Circular />}>
        <Route key="dashboard" path="/" component={HomePage} exact />
        <Route key="users" path="/users" component={HomePage} exact />
        <Route key="todo" path="/todo" component={TodoPage} exact />
      </Suspense>
    </Router>
  )
}
