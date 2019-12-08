<?php
/*
   Plugin Name: BestDeals admin
  a plugin to create awesomeness and spread joy
   Version: 1.2
   
   Author: Ravinder Singh
   License: GPL2
   */
function BestDeals_admin(){
    add_menu_page('deals Widget','deals','manage_options','deals_admin',200);
}
add_action('admin_menu','BestDeals_admin');
?>