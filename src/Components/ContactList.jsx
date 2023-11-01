import React from 'react'




function ContactList(props) {
  const {contact , removeContact} = props
  const contactList = contact.map((val)=>{
    return(
      <div className = 'contacts'>
        <div style={{marginLeft : "2px"}}>{val.data.name}</div>
        <div>{val.data.email}</div>
        <button className='btn'onClick={()=>{removeContact(val.id)}} > Delete </button>
      </div>
    )
  })
  return (
    <>
    <div>
      Contact List
    </div>
    <div> {contactList}</div>
    </>
  )
}

export default ContactList
