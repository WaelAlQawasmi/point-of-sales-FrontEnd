<template>
    
    <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
    <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div class="sidebar-brand-text mx-3"><span>مؤسسة القرنفل </span></div>
        </a>
        <hr class="sidebar-divider my-0" />
        <ul class="navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item"> <router-link :to="{ name: 'home' }" class="nav-link" active-class="border  border-primary"> <i class="fas fa-tachometer-alt"></i><span>الصفحة الرئيسية</span></router-link></li>
            <li class="nav-item"  v-if="isAdmin" ><a class="nav-link" href="users.php"><i class="fas fa-user"></i><span>المستخدمين</span></a></li>
            <li class="nav-item"> <router-link :to="{ name: 'POS' }" class="nav-link"  active-class="border  border-primary"><i class="fas fa-table"></i><span>شاشة المبيعات</span></router-link></li>
            <li class="nav-item"  v-if="isAdmin"><a class="nav-link" href="inventory.php"><i class="fas fa-table"></i><span>المخزون</span></a></li>
            <li class="nav-item"  v-if="isAdmin" ><a class="nav-link" href="sales.php"><i class="fas fa-table"></i><span>تقارير البيع</span></a></li>
            <li class="nav-item"  v-if="isAdmin" ><a class="nav-link" href="logs.php"><i class="fas fa-user-circle"></i><span>Logs</span></a></li>
            <li class="nav-item"><a class="nav-link" href="functions/logout.php"><i class="fas fa-user-circle"></i><span>تسجيل الخروج</span></a></li>
        </ul>
        <div class="text-center d-md-inline"><button id="sidebarToggle" class="btn rounded-circle border-0" type="button"></button></div>
    </div>

</nav>
</template>

<script setup>
 import { RouterLink } from 'vue-router';
    const props = defineProps({
        username:String,
        isAdmin:{
            type: Boolean,
        }
    });
</script>
