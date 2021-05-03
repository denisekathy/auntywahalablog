import react from 'react'

export default function CommentBox(){

    return(
   
   <> 
   <h1>Leave a Comment</h1>
<form>
    <div>
<textarea name="textarea" id="textarea" cols="50" rows="10" placeholder="Comment Here..."></textarea>
</div>
<div>
<button type='submit' className='btn' >
					Submit Comment
				</button>
</div>

</form>
       
</>
  

        


         
    )
}
