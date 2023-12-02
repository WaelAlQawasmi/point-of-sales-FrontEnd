<template>

    <div class="col-md-6">
        <div class="card shadow">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold">المنتجات</p>
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
                            <tr v-for="(product, index) in products" :key="index">
                                <td><img class="rounded-circle me-2" width="30" height="30" src="{{ product.image }}"></td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.price }}</td>
                                <td>
                                    <button @click="EmitAddTocart(product)" class="btn btn-success btn-icon-split" type="button" style="margin: 2px;" data-bs-target="#add-item" data-bs-toggle="modal" data-product-id="{{ index }}"><span class="text-white-50 icon"><i class="fas fa-arrow-up"></i></span><span class="text-white text">اضافة</span></button>
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
    const props = defineProps({
        products:Array
    });
 const emit = defineEmits(['addTocart']);
 const EmitAddTocart =(product)=>{
    emit("addTocart",product);
 }
</script>