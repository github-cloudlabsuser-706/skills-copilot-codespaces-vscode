# Login to Azure
Connect-AzAccount

# Set your subscription (replace with your subscription id)
$subscriptionId = "your-subscription-id"
Select-AzSubscription -SubscriptionId $subscriptionId

# Set variables
$resourceGroupName = "myResourceGroup"
$location = "westeurope"
$storageAccountName = "mystorageaccountname"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS