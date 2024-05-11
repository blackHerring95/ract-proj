$userMessage = $args[0]
git add .
$wholeMessage = "Week 2 commit - $userMessage"
git commit -m $wholeMessage
git push