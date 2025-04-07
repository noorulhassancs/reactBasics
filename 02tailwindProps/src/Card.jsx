import React from 'react'

function Card({name,para}) {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
    <div>
      <img class="size-70 shadow-xl rounded-md" alt="" src="../public/image.jpg" />
    </div>
    <div class="flex items-center flex-col">
      <span class="text-2xl font-medium">{name}</span>
      <span class="font-medium text-sky-500">{para}</span>
    </div>
  </div>
  )
}

export default Card