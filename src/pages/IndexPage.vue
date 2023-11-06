<template>
  <!-- <q-page class="flex flex-center">
    <img
      alt="Profile picture"
      src="src/images/Profile_pic.jpg"
      style="width: 200px; height: 200px"
    >
    <h5></h5>


  </q-page> -->

   
   <div >
    <q-splitter
      v-model="splitterModel"
      style="height: 500px"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="My Profile" icon="account_circle" label="My Profile" />
          <q-tab name="Educational Details" icon="school" label="Educational Details" />
          <q-tab name="Technical skills" icon="assessment" label="Technical skills" />
          <q-tab name="Contact" icon="account_box" label="Contact" />
        </q-tabs>
      </template>

      <template v-slot:after >
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="My Profile">
            <div>
                  <img
            alt="Profile picture"
            src="../images/Profile_pic.jpg"
            style="width: 170px; height: 170px"
          >
          <div>
          <p></p>
          <p>I am Soumya Chouhan</p>
          <p>I am a Software Engineer, current working in <b>LTIMindtree</b>, with a passion for learning</p></div>
          </div>
          </q-tab-panel>

          <q-tab-panel name="Educational Details">
            <div class="text-h4 q-mb-md"></div>
            <h4>Educational Details:</h4>
            <h6>HSC</h6>
            <p style="margin-top:-20px">2017 - 2018<br>
            Class XII<br>
            St. Arnold Higher Sec.School</p>
            <hr>
          
          <h6 >Graduation</h6>
            <p style="margin-top:-20px">
            2018 - 2023<br>
            Information Technology | Integrated Master of Technology<br>
            IIPS, DAVV, Indore</p>
           </q-tab-panel>

          <q-tab-panel name="Technical skills">
            <div class="text-h4 q-mb-md">Technology Stack</div>
            <ul>
              <li>Java</li>
              <li>HTML</li>
              <li>SQL</li>
              <li>SpringBoot</li>
              <li>Networks</li>
              <li>AI/ML</li>
              <li>Linux</li>
              <li>Windows</li>
              <li>Docker</li>
              <li>Android</li>              
            </ul>
             </q-tab-panel>

             <q-tab-panel name="Contact">
            <div class="text-h4 q-mb-md"></div>
             <h6>Contact Details:</h6>
             <p><b>Email</b>: <a href='mailto:Soumya.Chouhan@ltimindtree.com'>Soumya.Chouhan@ltimindtree.com</a></p>
             <p><b>Personal Email</b>: <a href='mailto:soumyachouhan2001@gmail.com'>soumyachouhan2001@gmail.com</a></p>
        
             <p><b>LinkedIn</b>: <a target="_blank" href='http://www.linkedin.com/in/soumya-chouhan'>http://www.linkedin.com/in/soumya-chouhan</a></p>
           </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
setup () {
    return {
      tab: ref('My Profile'),
      splitterModel: ref(20)
    }
}
})



// export default {
//   setup () {
//     return {
//       tab: ref('mails'),
//       splitterModel: ref(20)
//     }
//   }
// }
</script>
