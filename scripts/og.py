#!/usr/bin/env python3
"""Generate public/og.png — the social card.

Run from site/:  python3 scripts/og.py

Uses the macOS system font, which is the same typeface the site renders in, so
the card and the page look like the same product. Regenerate after changing the
tagline or the product shot.
"""

from PIL import Image, ImageDraw, ImageFont
import pathlib

W, H = 1200, 630
INK = (10, 10, 11)
MUTED = (99, 99, 107)
ACCENT = (16, 6, 159)
PAPER = (255, 255, 255)

FONT = "/System/Library/Fonts/SFNS.ttf"
ROOT = pathlib.Path(__file__).resolve().parent.parent


def font(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(FONT, size)
    f.set_variation_by_name(weight)
    return f


def tracked(draw, xy, text, fnt, fill, tracking=0.0):
    """Draw text with letter-spacing. PIL has no tracking, and the brand's
    display type is set tight (-0.035em), so the card would look wrong without
    it. Returns the advance width."""
    x, y = xy
    step = tracking * fnt.size
    for ch in text:
        if draw:
            draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + step
    return x - xy[0]


def measure(draw, text, fnt, tracking=0.0):
    return sum(draw.textlength(c, font=fnt) for c in text) + tracking * fnt.size * len(text)


def wrap(draw, text, fnt, max_w, tracking=0.0):
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if measure(draw, trial, fnt, tracking) <= max_w or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def main() -> None:
    card = Image.new("RGB", (W, H), PAPER)
    draw = ImageDraw.Draw(card)

    # Product shot on the right, bled to the edge so the card doesn't read as a
    # centred logo slide.
    shot = Image.open(ROOT / "src/assets/stick-key.png").convert("RGBA")
    target_w = 620
    shot = shot.resize(
        (target_w, round(target_w * shot.height / shot.width)), Image.LANCZOS
    )
    card.paste(shot, (W - target_w - 24, (H - shot.height) // 2), shot)

    left, text_w = 76, W - 620 - 76 - 40

    # Wordmark
    tracked(draw, (left, 66), "Stick.", font(38, "Bold"), INK, -0.04)

    # The hook, as large as fits in two lines.
    tagline = "Put the off switch in another room."
    for size in range(66, 38, -2):
        f = font(size, "Bold")
        lines = wrap(draw, tagline, f, text_w, -0.035)
        if len(lines) <= 3:
            break
    y = 214
    for ln in lines:
        tracked(draw, (left, y), ln, f, INK, -0.035)
        y += round(size * 1.12)

    # Supporting line
    sub = font(25, "Regular")
    draw.text((left, y + 26), "A USB key that blocks the sites and", font=sub, fill=MUTED)
    draw.text((left, y + 60), "apps you choose on your Mac.", font=sub, fill=MUTED)

    # Accent rule, the one place the brand blue appears on the card.
    draw.rectangle([left, H - 92, left + 52, H - 88], fill=ACCENT)
    draw.text((left, H - 74), "getstick.website", font=font(24, "Medium"), fill=INK)

    out = ROOT / "public/og.png"
    card.save(out, optimize=True)
    print(f"wrote {out.relative_to(ROOT)} ({out.stat().st_size // 1024} kB, {W}x{H})")


if __name__ == "__main__":
    main()
