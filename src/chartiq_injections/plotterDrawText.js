export const plotterDrawText = () => {
    CIQ.Plotter.prototype.drawText = function (context, series) {
        for (let i = 0; i < series.text.length; i++) {
            const textObj = series.text[i];
            if (textObj.bg) {
                const w = textObj.width ? textObj.width : context.measureText(textObj.text).width;
                const h = textObj.height ? textObj.height : 12;
                const prev = context.fillStyle;
                context.fillStyle = textObj.bg;
                if (context.textAlign === 'right') {
                    context.fillRect(textObj.x, textObj.y - (h / 2), -w, -h);
                } else {
                    context.fillRect(textObj.x, textObj.y - (h / 2), w, h);
                }
                context.fillStyle = prev;
            }
            context.fillText(textObj.text, textObj.x - 14, textObj.y);
        }
    };
};