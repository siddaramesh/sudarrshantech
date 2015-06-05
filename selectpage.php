<?php  
	$product =  $_REQUEST['product'];//echo $user_pwd;
	//echo "Product is ".$product."<br />";
	if($product == "Power Connectors")
	{
		echo "<script>location.href='index.html'</script>";	
	}
	else if($product == "Power Converters")
	{
		echo "<script>location.href='power-converters.html'</script>";	
	}
	else if($product == "Cable Harnessing Design")
	{
		echo "<script>location.href='cable-harnessing-design.html'</script>";	
	}
	else if($product == "Memory")
	{
		echo "<script>location.href='memory.html'</script>";	
	}
	else if($product == "Capacitor")
	{
		echo "<script>location.href='capacitor.html'</script>";	
	}
	else if($product == "Optical Assembly")
	{
		echo "<script>location.href='optical-assembly.html'</script>";	
	}
	else if($product == "Hybrid Material")
	{
		echo "<script>location.href='hybrid-material.html'</script>";	
	}
	else if($product == "Connectors")
	{
		echo "<script>location.href='connectors.html'</script>";	
	}
	else if($product == "Frequency Control Devices")
	{
		echo "<script>location.href='frequency-control-devices.html'</script>";	
	}
	else if($product == "ASIC/Mems")
	{
		echo "<script>location.href='asic-mems.html'</script>";	
	}
	else if($product == "Foundary Serivces")
	{
		echo "<script>location.href='founder-services.html'</script>";	
	}
	else if($product == "Consolidation")
	{
		echo "<script>location.href='consolidation.html'</script>";	
	}
?>	
<div style="margin:0 auto; width:100%; text-align:center;"><img src="images/loading.gif" width="50" height="50" /> </div>