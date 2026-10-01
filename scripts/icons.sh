#!/bin/sh
# Пересобрать спрайт Lucide-иконок: sh scripts/icons.sh
set -e
OUT=src/assets/sprite.svg
TMP=$(mktemp)
node ~/.claude/skills/shyngys-grammar-site/scripts/extract_icons.js "$TMP" \
  ArrowRight ArrowLeft ArrowUpRight ChevronDown ChevronRight Search Menu X Clock CalendarCheck User Users \
  BookOpen Headphones Mic PenLine FileText ListChecks TriangleAlert Lightbulb Info CircleCheck CircleX Brain \
  Trophy Repeat Volume2 Mail Send Timer Target Sparkles Zap Eye Flag Route GraduationCap MessageCircle \
  MessagesSquare Hand ThumbsUp Smile Coffee Layers Puzzle Scale Hourglass Signpost Ear Languages Copy Check \
  Star Bookmark Rss Hash Award Play Pause RotateCcw Calculator AudioLines Gauge Plus Minus MapPin Wallet \
  Building2 Globe Landmark Plane Briefcase Lock
{ echo '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">'; cat "$TMP"; echo '</svg>'; } > "$OUT"
rm "$TMP"
echo "sprite: $(grep -c '<symbol' $OUT) icons"
