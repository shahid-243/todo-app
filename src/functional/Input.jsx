import React from 'react'

export default function Input() {
  return (
    <section>
    <form>
        <div className="row">
            <div className="col-10">
                <input type="text" className='form-control' placeholder="Enter Todo" />
            </div>
            <div className="col-2 d-grid">
                <button className="btn btn-primary">Add</button>
            </div>
        </div>
    </form>
</section>

  )
}
