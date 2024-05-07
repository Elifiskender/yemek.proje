import React from 'react'

export default function Login() {
  return (
  
  <>

<div className="container mt-5">
  <form className='w-50'>

    <h1>Oturum Aç</h1>
    <hr/>

 <div className='mb-3'>
 <input type="text" placeholder='Kullanıcı Adı' className='form-control'/>
 </div>

 <div className='mb-3'>
 <input type="password" placeholder='Şifre' className='form-control'/>
 </div>

<div>
    <p className='text-muted'>

    Hesabınız yok ise buradan <a href="?">kayıt ol.</a>
    </p>
    </div>

 <div className='mb-3'>
 <button className='btn btn-success' type='submit'>Giriş Yap</button>
 </div>

  </form>

</div>
   </>
  )
}
