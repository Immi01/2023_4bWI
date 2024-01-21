export default function List({listItems}) {
  
  return (
    <div class='m-3'>
      {listItems.map((listItem)=> <div className='text-white bg-teal-600 w-60 p-6 m-px hover:bg-teal-500 hover:cursor-pointer'> {listItem} </div>)}
    </div>
  );
}
