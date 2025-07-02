import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ContactPage, HomePage } from './container'
import { GlobalStyles } from './styled'
import { MyFooter, MyHeader } from './component'

export const MyProject=()=>{
	return (
		<Router>
			<GlobalStyles/>
			<MyHeader/>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
			<MyFooter/>
		</Router>
	)
}
