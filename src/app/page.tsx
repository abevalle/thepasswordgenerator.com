import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <h1>The Password Generator</h1>
      <form className="w-full max-w-sm">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type='checkbox' id="az" name="a-z" value="a-z" className="sr-only peer" defaultChecked></input>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">a-z</span>
        </label><br/>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type='checkbox' id="AZ" name="A-Z" value="A-Z" className="sr-only peer" defaultChecked></input>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">A-Z</span>
        </label><br/>

        <label className="relative inline-flex items-center cursor-pointer">
        <input type='checkbox' id="09" name="0-9" value="0-9" className="sr-only peer" defaultChecked></input>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">0-9</span>
        </label><br/>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type='checkbox' id="special" name="!@$%&" value="!@$%&" className="sr-only peer"></input>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">!@$%&</span>
        </label><br/>
        <input type="button" id="submit" name="submit" value="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"></input>
      </form>
    </main>
  )
}
