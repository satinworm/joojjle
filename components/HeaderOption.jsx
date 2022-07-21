

export default function HeaderOption({Icon, title, selected}) {
  return (
	  <div className={`flex items-center p-2 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 ${selected && 'text-blue-500 border-blue-500'}`}>
		  <Icon className="h-4 mr-2" />
		  <p className="hidden sm:inline-flex">{title} </p>
	 </div>
  )
}
