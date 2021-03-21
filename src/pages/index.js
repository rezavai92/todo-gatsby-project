import React from "react"
import TaskProvider from '../context/taskContext'
import '../styles/global.css'
import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (<div className="container" >
    <TaskProvider>
    <Layout>

    </Layout>
    </TaskProvider>
  </div>)
}
