export default function decorate(block) {
    console.log(block);
    [...block.children].forEach((articleChild,index)=>{
        if(index==0){
            articleChild.className='article-title'
        }else{
            articleChild.className='article-body'
        }
        
    })
}