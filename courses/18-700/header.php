<?php $page = (isset( $page )) ? $page : ''; ?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="styles.css"/>
        <title>Course Website</title>
        <script type="text/x-mathjax-config">
            MathJax.Hub.Config({
                tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
            });
        </script>
        <script type="text/javascript" src="/js/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
    </head>

    <body>
        <div id="page">

            <header>
                <div class="logo">
                    <a href="https://math.mit.edu/" ><img src="images/logo-math.gif" alt="MIT" width="146" height="39" /></a>
                </div>
            
                <h1><a href="index.html">18.700 - Linear Algebra (Fall 2024)</a></h1>
            </header>

            <nav>
                <ul>
                    <li class="home <?php echo ( $page == 'home') ? 'selected' : ''; ?>"><a href="index.html">Home</a></li> 
                    <li class="syllabus <?php echo ( $page == 'syllabus') ? 'selected' : ''; ?>"><a href="general_info.html">General Information</a></li> 
                    <li class="schedule <?php echo ( $page == 'schedule') ? 'selected' : ''; ?>"><a href="schedule.html">Schedule</a></li> 
                    <li class="ps <?php echo ( $page == 'ps') ? 'selected' : ''; ?>"><a href="hw.html">Problem Sets</a></li> 
                    <li class="links <?php echo ( $page == 'links') ? 'selected' : ''; ?>"><a href="links.html">Links</a></li>  
                </ul>
            </nav>

            <main>
