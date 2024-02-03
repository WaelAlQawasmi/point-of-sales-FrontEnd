<template>

    <div class="col-md-6">
        <div class="card shadow">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold">السلة</p>
            </div>
            <div class="card-body">
                
                <div class="table-responsive table mt-2" id="dataTable-2" role="grid" aria-describedby="dataTable_info">
                    <table class="table table-hover table-bordered my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th> رقم المنتج</th>
                                <th>اسم المنتج </th>
                                <th>الكمية</th>
                                <th>السعر</th>
                                <th>خيار</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in cart" :key="index">
                                <td><img class="rounded-circle me-2" width="30" height="30" :src=" product.image "></td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.price }}</td>
                                <td>
                                    <button class="btn btn-danger btn-icon-split" @click="emitRemoveFromCart(product)" type="button" data-bs-target="#confirmation" data-bs-toggle="modal" data-history-id="<?php echo $row['id']; ?>" data-product-id="" data-qty=""><span class="text-white-50 icon"><i class="fas fa-trash"></i></span><span class="text-white text">حذف</span></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const emit= defineEmits(['removeItem']);
    const emitRemoveFromCart = (item)=>{
        emit("removeItem",item);
    }
    const props = defineProps({
        product:Array
    });
</script>