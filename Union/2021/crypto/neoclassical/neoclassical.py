import os
from hashlib import sha1
from random import randint
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad

FLAG = b"union{XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}"

def list_valid(l):
    x = l // 2
    checked = set([x])
    while x * x != l:
        x = (x + (l // x)) // 2
        if x in checked: return False
        checked.add(x)
    return True

def list_iter(n):
    x = n
    y = (x + 1) // 2
    while y < x:
        x = y
        y = (x + n // x) // 2
    return x

def list_mul(l1,l2,p):
    X, Y = len(l1), len(l2)
    Z = list_iter(X)
    assert X == Y
    assert list_valid(X)
    l3 = []
    for i in range(Z):
        for j in range(Z):
            prod_list = [x*y for x,y in zip(l1[Z*i:Z*(i+1)], l2[j::Z])]
            sum_list = sum(prod_list) % p
            l3.append(sum_list)
    return l3

def list_exp(l0, e, p):
    exp = bin(e)[3::]
    l = l0
    for i in exp:
        l = list_mul(l,l,p)
        if i == '1':
            l = list_mul(l,l0,p)
    return l

def gen_public_key(G,p):
    k = randint(2,p-1)
    B = list_exp(G,k,p)
    return B,k

def gen_shared_secret(M,k,p):
    S = list_exp(M,k,p)
    return S[0]

def encrypt_flag(shared_secret: int):
    # Derive AES key from shared secret
    key = sha1(str(shared_secret).encode('ascii')).digest()[:16]
    # Encrypt flag
    iv = os.urandom(16)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    ciphertext = cipher.encrypt(pad(FLAG, 16))
    # Prepare data to send
    data = {}
    data['iv'] = iv.hex()
    data['encrypted_flag'] = ciphertext.hex()
    return data

p = 64050696188665199345192377656931194086566536936726816377438460361325379667067
G = [37474442957545178764106324981526765864975539603703225974060597893616967420393,59548952493843765553320545295586414418025029050337357927081996502641013504519, 31100206652551216470993800087401304955064478829626836705672452903908942403749, 13860314824542875724070123811379531915581644656235299920466618156218632047734, 20708638990322428536520731257757756431087939910637434308755686013682215836263, 24952549146521449536973107355293130621158296115716203042289903292398131137622, 10218366819256412940642638446599581386178890340698004603581416301746386415327, 2703573504536926632262901165642757957865606616503182053867895322013282739647, 15879294441389987904495146729489455626323759671332021432053969162532650514737, 30587605323370564700860148975988622662724284710157566957213620913591119857266, 36611042243620159284891739300872570923754844379301712429812256285632664939438, 58718914241625123259194313738101735115927103160409788235233580788592491022607, 18794394402264910240234942692440221176187631522440611503354694959423849000390, 37895552711677819212080891019935360298287165077162751096430149138287175198792, 42606523043195439411148917099933299291240308126833074779715029926129592539269, 58823705349101783144068766123926443603026261539055007453105405205925131925190, 5161282521824450434107880210047438744043346780853067016037814677431009278694, 3196376473514329905892186470188661558538142801087733055324234265182313048345, 37727162280974181457962922331112777744780166735208107725039910555667476286294, 43375207256050745127045919163601367018956550763591458462169205918826786898398, 21316240287865348172884609677159994196623096993962103476517743037154705924312, 7032356850437797415676110660436413346535063433156355547532408592015995190002, 3916163687745653495848908537554668396996224820204992858702838114767399600995, 13665661150287720594400034444826365313288645670526357669076978338398633256587,23887025917289715287437926862183042001010845671403682948840305587666551788353]
A,a = gen_public_key(G,p)
B,b = gen_public_key(G,p)
assert gen_shared_secret(A,b,p) == gen_shared_secret(B,a,p)

shared_secret = gen_shared_secret(B,a,p)
encrypted_flag = encrypt_flag(shared_secret)

print(f"Alice's public key: {A}") 
print(f"Bob's public key: {B}")
print(f"Encrypted flag: {encrypted_flag}")



