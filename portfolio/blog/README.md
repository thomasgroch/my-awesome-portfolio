---
title: Todos posts
type: post
sidebar: true
---
# Blog WIP 🚧

<Tags />



<script>
export default {
  mounted () {
    const current = document.querySelectorAll('.sidebar-links .sidebar-heading.open span')
    if( current.length == 0 || new Date().getFullYear() != current[0].innerText ){
    	const el = document.querySelectorAll('.sidebar-links li:nth-child(2) span')[0]
    	if( el ){
        	el.click()
        }
    }
  }
}
</script>
