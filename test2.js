var test2 = {};

(function() {
	test2.build = function() {
		test2.win = Ti.UI.createWindow({ title: 'Test 2 Win' });
		test2.table = Ti.UI.createTableView({ top: 50 });
		test2.label = Ti.UI.createLabel({ text: 'Some Label', color: '#eee', width: 100, height: 20, top: 15 });
		test2.close = Ti.UI.createButton({ title: 'Close' });
			
		var data = [
			{ title: 'Row 1' },
			{ title: 'Row 2' },
			{ title: 'Row 3' },
			{ title: 'Row 4' },
			{ title: 'Row 5' },
		];
		
		test2.table.setData(data);
		
		test2.close.addEventListener('click', function() {
			test2.win.close();
			// test2.win = null;
			// test2.table = null;
			// test2.label = null;
			// test2.close = null;
		});
		
		test2.win.add(test2.label);
		test2.win.add(test2.table);
		test2.win.rightNavButton = test2.close;
		
		test2.win.open({ modal: true });	
	};
})();