import React from 'react'
import { BrowserRouter as  Route, Routes, HashRouter } from 'react-router-dom'
import { ContactPage, HomePage } from './container'
import { GlobalStyles } from './styled'
import { MyFooter, MyHeader } from './component'

export const MyProject=()=>{
	return (
		<HashRouter>
			<GlobalStyles/>
			<MyHeader/>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
			<MyFooter/>
		</HashRouter>
	)
}
