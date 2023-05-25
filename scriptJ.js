function modifyFields() {
      var productName = document.getElementById('productName').value;
      var productDescription = document.getElementById('productDescription').value;
      var productNum = document.getElementById('productNum').value;
      
      // Atualiza os campos modificados
      document.getElementById('modifiedProductName').textContent = productName;
      document.getElementById('modifiedProductDescription').textContent = productDescription;
      document.getElementById('modifiedNum').textContent = productNum;
      
      // Limpa os campos de entrada
      document.getElementById('productName').value = '';
      document.getElementById('productDescription').value = '';
      document.getElementById('productNum').value = '';
   }