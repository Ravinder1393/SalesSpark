<?php

/*
Plugin Name:Custom Jas
Version:1.0.0


*/


function sidebar(){

}
add_shortcode('sidebar plugin','sidebar');

function sidebar_admin(){
add_menu_page('sidebar widget','sidebar','manage_options','sidebar-admin','',200);
}
add_action('admin_menu','sidebar_admin');
?>