<template>
    <nav class="navbar navbar-expand-lg bg-success p-2 m-0 text-dark bg-opacity-50">
        <div class="container-fluid m-0 p-0">
            <a class="navbar-brand text-white" href="#">مؤسسة القرنفل</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"> <router-link :to="{ name: 'home' }" class="nav-link text-white"
                            active-class="active fw-bold"> <i class="fas fa-tachometer-alt"></i><span>الصفحة
                                الرئيسية</span></router-link></li>
                    <li class="nav-item" v-if="isAdmin"><a class="nav-link text-white" href="users.php"><i
                                class="fas fa-user"></i><span>المستخدمين</span></a></li>
                    <li class="nav-item"> <router-link :to="{ name: 'POS' }" class="nav-link text-white"
                            active-class="active fw-bold"><i class="fas fa-table"></i><span>شاشة
                                المبيعات</span></router-link></li>
                    <li class="nav-item" v-if="isAdmin"><a class="nav-link text-white" href="inventory.php"><i
                                class="fas fa-table"></i><span>المخزون</span></a></li>
                    <li class="nav-item" v-if="isAdmin"><a class="nav-link text-white" href="sales.php"><i
                                class="fas fa-table"></i><span>تقارير البيع</span></a></li>
                    <li class="nav-item" v-if="isAdmin"><a class="nav-link text-white" href="logs.php"><i
                                class="fas fa-user-circle"></i><span>Logs</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="functions/logout.php"><i
                                class="fas fa-user-circle text-white"></i><span class="text-white">تسجيل الخروج</span></a></li>
                </ul>
                <button class="btn btn-primary" type="button" v-show="isAdmin" @click="EmitchangeRole">Change Role</button>

            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const emit = defineEmits(['changeRole']);
const EmitchangeRole = () => {
    emit("changeRole");

}
const props = defineProps({
    username: String,
    isAdmin: {
        type: Boolean,
    }
});
</script>
