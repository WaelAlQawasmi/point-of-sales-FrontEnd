<template>
    <div class="card shadow text-center col">
        <div class="card-header py-3">
            <p class="text-primary m-0 fw-bold">الصفحة الرئيسية</p>
        </div>
        <div class="card-body">

            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                <p>
                    اهلاً بك {{ name }} في نظام المبيعات في مؤسسة القرنفل

                </p>
<p> email : {{ email  }}</p>
            </div>

        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      name:'',
      email: '',
      errorMessage: false
    };
  },
  methods: {

    async getUserData() {


      try {

        var headers = {
          "Content-type": "application/json",
          'Authorization': "Bearer " + localStorage.getItem("token"),
        };

        const response = await axios.get('http://127.0.0.1:8089/api/main-page/user-profile', {
          withCredentials: true,
          headers: headers
        });
        // Handle the response
        console.log(response.data);
        this.name=response.data.name;
        this.email=response.data.email;
      } catch (error) {
        // Handle errors
      }

    }
  },
  created() {
 
    this.getUserData();
  },

};
</script>
