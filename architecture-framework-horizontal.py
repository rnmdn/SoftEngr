"""Render the horizontal IT career recommendation architecture as a vector PDF."""

from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont


OUT = "architecture-framework-horizontal.pdf"
W, H = 2400, 1220
INK = HexColor("#17313B")
MUTED = HexColor("#536772")
LINE = HexColor("#3A5B66")
BLUE = HexColor("#EAF5FC")
YELLOW = HexColor("#FFF4D8")
MINT = HexColor("#E6F7EE")
PAPER = HexColor("#FBFCFA")
WHITE = HexColor("#FFFFFF")
TEAL = HexColor("#2B6671")
ORANGE = HexColor("#B07825")

pdfmetrics.registerFont(TTFont("Segoe", r"C:\Windows\Fonts\segoeui.ttf"))
pdfmetrics.registerFont(TTFont("SegoeSemi", r"C:\Windows\Fonts\seguisb.ttf"))

c = canvas.Canvas(OUT, pagesize=(W, H), pageCompression=1)
c.setTitle("IT Career Path Recommendation Engine — Architectural Framework")


def rect(x, y, w, h, fill, stroke=None, radius=0, sw=1):
    c.setLineWidth(sw)
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    fn = c.roundRect if radius else c.rect
    args = (x, H-y-h, w, h)
    if radius:
        args += (radius,)
    fn(*args, fill=1, stroke=int(stroke is not None))


def line(points, color=LINE, width=3, dash=None):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.setLineCap(1)
    c.setLineJoin(1)
    c.setDash(dash or [])
    p = c.beginPath()
    p.moveTo(points[0][0], H-points[0][1])
    for x, y in points[1:]:
        p.lineTo(x, H-y)
    c.drawPath(p)
    c.setDash([])


def arrow(points, color=LINE, width=3, dashed=False, size=13):
    line(points, color, width, [8, 8] if dashed else None)
    x0, y0 = points[-2]
    x1, y1 = points[-1]
    import math
    a = math.atan2(y1-y0, x1-x0)
    p = c.beginPath()
    p.moveTo(x1, H-y1)
    for d in (a+2.65, a-2.65):
        p.lineTo(x1+size*math.cos(d), H-(y1+size*math.sin(d)))
    p.close()
    c.setFillColor(color)
    c.drawPath(p, fill=1, stroke=0)


def txt(x, y, s, size=24, color=INK, bold=False, align="left"):
    c.setFont("SegoeSemi" if bold else "Segoe", size)
    c.setFillColor(color)
    yy = H-y-size*0.85
    if align == "center":
        c.drawCentredString(x, yy, s)
    elif align == "right":
        c.drawRightString(x, yy, s)
    else:
        c.drawString(x, yy, s)


def icon(kind, x, y, size=52):
    c.saveState()
    c.translate(x, H-y)
    c.scale(size/24, -size/24)
    c.setStrokeColor(INK)
    c.setLineWidth(1.65)
    c.setLineCap(1)
    c.setLineJoin(1)
    c.setFillColor(WHITE)
    def ln(*pts):
        p=c.beginPath(); p.moveTo(*pts[0])
        for z in pts[1:]: p.lineTo(*z)
        c.drawPath(p)
    def rr(a,b,w,h,r=2): c.roundRect(a,b,w,h,r,fill=0,stroke=1)
    def circ(a,b,r): c.circle(a,b,r,fill=0,stroke=1)
    if kind == "briefcase":
        rr(2,6,20,14); ln((8,6),(8,3),(16,3),(16,6)); ln((2,13),(10,15),(14,15),(22,13))
    elif kind == "scan":
        ln((7,2),(4,2),(2,4),(2,7)); ln((17,2),(20,2),(22,4),(22,7)); ln((2,17),(2,20),(4,22),(7,22)); ln((17,22),(20,22),(22,20),(22,17)); ln((6,8),(18,8));ln((6,12),(18,12));ln((6,16),(14,16))
    elif kind == "database":
        c.ellipse(3,2,21,8,fill=0,stroke=1); ln((3,5),(3,19));ln((21,5),(21,19));c.ellipse(3,16,21,22,fill=0,stroke=1); c.arc(3,9,21,15,180,180)
    elif kind == "network":
        rr(9,2,6,6,1);rr(2,16,6,6,1);rr(16,16,6,6,1);ln((12,8),(12,12),(5,12),(5,16));ln((12,12),(19,12),(19,16))
    elif kind == "box":
        ln((12,2),(21,7),(21,17),(12,22),(3,17),(3,7),(12,2));ln((3,7),(12,12),(21,7));ln((12,12),(12,22))
    elif kind == "clipboard":
        rr(5,4,14,18);rr(9,2,6,4,1);ln((9,11),(16,11));ln((9,16),(16,16));circ(7,11,.35);circ(7,16,.35)
    elif kind == "filter":
        ln((2,5),(22,5));ln((6,12),(18,12));ln((9,19),(15,19))
    elif kind == "branch":
        ln((6,3),(6,18));ln((6,15),(9,10),(15,7));circ(18,6,3);circ(6,19,3)
    elif kind == "trophy":
        rr(6,2,12,11,2);ln((6,4),(2,4),(2,8),(4,11),(7,11));ln((18,4),(22,4),(22,8),(20,11),(17,11));ln((12,13),(12,19));ln((8,22),(16,22));ln((9,19),(15,19))
    elif kind == "target":
        circ(12,12,10);circ(12,12,6);circ(12,12,2)
    elif kind == "book":
        ln((12,5),(12,21));ln((12,5),(8,3),(2,3),(2,18),(8,18),(12,21));ln((12,5),(16,3),(22,3),(22,18),(16,18),(12,21))
    elif kind == "monitor":
        rr(2,3,20,14,2);ln((12,17),(12,21));ln((8,21),(16,21))
    c.restoreState()


def card(x, y, w, h, title_lines, subtitle_lines, icon_name, fill):
    rect(x,y,w,h,fill,LINE,20,2.5)
    badge = 94 if w > 350 else 72
    bx=x+22; by=y+(h-badge)/2
    rect(bx,by,badge,badge,WHITE,LINE,14,2.2)
    icon(icon_name,bx+(badge-51)/2,by+(badge-51)/2,51)
    tx=bx+badge+22
    fs=27 if w > 350 else 23
    top=y+32 if len(title_lines)>1 else y+44
    for i,t in enumerate(title_lines): txt(tx,top+i*(fs+5),t,fs,bold=True)
    st=top+len(title_lines)*(fs+5)+10
    for i,t in enumerate(subtitle_lines): txt(tx,st+i*25,t,19,MUTED)


rect(0,0,W,H,PAPER)
txt(80,58,"IT CAREER PATH RECOMMENDATION ENGINE",48,bold=True)
txt(82,119,"Architectural framework  /  model training and student recommendation",25,MUTED)

rect(55,180,2290,345,WHITE,HexColor("#C9DCE2"),24,2)
txt(85,205,"01  MODEL TRAINING",28,TEAL,bold=True)

train_x=[90,552,1014,1476,1938]
train=[
    (["IT Job Postings"],["Six career categories"],"briefcase",BLUE),
    (["Skill Extraction"],["Normalize skills"],"scan",YELLOW),
    (["Feature Dataset"],["Skills + category labels"],"database",BLUE),
    (["Random Forest","Training"],["Train classifier"],"network",MINT),
    (["Trained Model"],["Career classifier"],"box",BLUE),
]
for x,item in zip(train_x,train): card(x,270,410,165,*item)
for i in range(4): arrow([(train_x[i]+410,352),(train_x[i+1]-10,352)],TEAL,3.2)

rect(55,595,2290,565,WHITE,HexColor("#D6E5DD"),24,2)
txt(85,620,"02  STUDENT RECOMMENDATION",28,TEAL,bold=True)

# Training data and the trained classifier enter different stages of the student flow.
arrow([(1219,435),(1219,510),(1525,510),(1525,705)],ORANGE,3.3)
rect(1280,475,208,35,PAPER)
txt(1384,480,"CATEGORY SKILL PATTERNS",18,ORANGE,True,"center")
arrow([(2143,435),(2143,559),(875,559),(875,705)],TEAL,3.3)
rect(1055,541,197,36,PAPER)
txt(1153,548,"TRAINED MODEL",18,TEAL,True,"center")

student_x=[80,405,730,1055,1380,1705,2030]
student=[
    (["Student","Assessment"],["Skills + exposure"],"clipboard",BLUE),
    (["Feature","Mapping"],["Classifier inputs"],"filter",YELLOW),
    (["Random Forest","Classification"],["Career category"],"branch",BLUE),
    (["Top 3 Careers"],["Class probabilities"],"trophy",MINT),
    (["Skill-Gap","Analysis"],["Required skills"],"target",YELLOW),
    (["Learning","Resources"],["Targeted suggestions"],"book",BLUE),
    (["Results","Interface"],["Career guidance"],"monitor",MINT),
]
for x,item in zip(student_x,student): card(x,705,290,170,*item)
for i in range(6): arrow([(student_x[i]+290,790),(student_x[i+1]-8,790)],TEAL,3.2)

txt(90,913,"Additional assessment context",22,MUTED,bold=True)
rect(85,953,123,48,WHITE,HexColor("#9EB9B3"),16,2)
rect(225,953,145,48,WHITE,HexColor("#9EB9B3"),16,2)
txt(146,966,"Interest",20,TEAL,True,"center")
txt(297,966,"Work style",20,TEAL,True,"center")
line([(146,1001),(146,1037),(297,1037),(297,1001)],TEAL,2.5,[7,7])
arrow([(222,1037),(222,1090),(2175,1090),(2175,875)],TEAL,2.6,True,12)
rect(880,1069,620,43,WHITE)
txt(1190,1078,"INTEREST + WORK STYLE: REFLECTION ONLY",20,TEAL,True,"center")

txt(82,1185,"Recommendations support career exploration and adviser discussion.",21,MUTED)
txt(2320,1185,"Icons based on Lucide · ISC/MIT",18,MUTED,align="right")
c.showPage()
c.save()
print(OUT)
