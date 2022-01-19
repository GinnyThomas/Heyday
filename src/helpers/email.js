import { send, init } from "emailjs-com";
import finalResult from "../../helpers/calculation";

const sendEmail = (content) => {
    init("user_kNMbvTeJ6lrcqkiNomd4Q");
    const toSend = {
      result = finalResult(),
      email = ''
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'gmail',
          'template_vmdznvz',
          toSend,
          'user_kNMbvTeJ6lrcqkiNomd4Q'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
    send("gmail", "template_vmdznvz", toSend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export default { sendEmail };


//old code
<script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
   const templateParams = {
   result = '${finalResult}',
   email = 'abc' //hard coded but will come from email results form.
  };
<script>
{/* <script type="text/javascript">
   (function(){
      emailjs.init("user_kNMbvTeJ6lrcqkiNomd4Q") // Not sure this is needed
   })(); */} 
   
 
    emailjs.send("gmail", "template_vmdznvz", templateParams)
    {/* emailjs.send("gmail","template_vmdznvz", templateParams{
email: “{email}“, */}
{/* }); */}
   
</script>
