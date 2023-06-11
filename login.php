<?php 

?>
<?php
    if(isset($_POST['user_name']) && isset($_POST['password']))
    {
        include 'config.php';
        include 'db.php';
        if(!empty($_POST["user_name"]))
        {
            $get_user_query =" select * from dbShnkr23stud2.tbl_209_users where username='".$_POST['user_name']."' and user_password=". $_POST['password']." ";
            $result = mysqli_query($connection, $get_user_query);
            $row = mysqli_fetch_array($result);

            if(is_array($row)) {
                session_start();
                $_SESSION["user_id"] = $row['user_id'];
                $_SESSION["user_name"] = $row['username'];
                $_SESSION["user_type"] = $row['user_type'];
                // echo 'session started <br>' . $_SESSION["user_name"];
                $message =  'authentication complete';
                header("Location: " . base_url . "index.html");
                // session_destroy();
                mysqli_close($connection);

            } else {
                $message = "Invalid Username or Password!";
            }
        }
        // $message = "tttt";
    }
    else
    {
        $message = "Please fill in the required fields";
    }

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shenkar</title>
    <script src="https://cdn.tailwindcss.com"></script>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Flowbite    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" method="post">
                  <div>
                      <label for="user_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your user name</label>
                      <input type="text" name="user_name" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="orbasker123" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" >
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
      <div class="alert-meesage">
            <?php 
            if(isset($message)){
                echo $message;
            }
         ?>
         <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <span class="font-medium">Warning alert!</span>  <?php 
            if(isset($message)){
                echo $message;
            }
            ?>
        </div>
         </div>
  </div>
</section>

        
</body>
</html>


