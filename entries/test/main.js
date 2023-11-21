$(document).ready(function() {

			// list one content
			var one = [
				"weird",
				"smooth",
				"evil",
				"amazing",
				"open",
				"sunshine",
				"cool",
				"soft",
				"sexy",
				"sour",
				"old",
				"abnormal",
				"striped",
				"sticky",
				"beautiful",
			];

			// list two content
			var two = [
				"elephant",
				"rat",
				"tortoise",
				"bug",
				"pill",
				"oval",
				"jacket",
				"friend",
				"inch",
				"fountain",
				"miracle",
				"deer",
				"pool",
				"door",
				"word",
			];
            
            // list three content
			var three = [
				"circus",
				"house",
				"gym",
				"zoo",
                "pool",
				"farm",
				"restaurant",
				"mall",
                "market",
				"lab",
				"courthouse",
                "school",
				"classroom",
				"street"
			];
            

			// This is a very common randomizing function.
			// It takes a list (array) and returns one at random.
			function select_random(x){
				y = x[Math.floor(Math.random()*x.length)];
				return y;
			}

			function generate(){

				// Select a random item from each list
				var selected_one = select_random(one);
				var selected_two = select_random(two);
                var selected_three = select_random(three);

				// Take the selected (random) item from list and make it visible
				$('.list-one').html(selected_one);
				$('.list-two').html(selected_two);
                $('.list-three').html(selected_three);

			}

			$('button').click(function(){
				generate();
			});

			generate();
			
		});
