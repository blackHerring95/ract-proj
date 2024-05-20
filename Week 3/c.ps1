$userMessage = $args[0]
git add .
$wholeMessage = "Week 3 commit - $userMessage"
git commit -m $wholeMessage
git push