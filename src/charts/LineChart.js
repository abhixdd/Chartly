class LineChart {
    constructor(context, data, options) {
        this.ctx = context;
        this.data = data;
        this.options = options || {};
    }

    draw() {
        const ctx = this.ctx;
        const { labels, datasets } = this.data;
        const { width, height } = ctx.canvas;

        const maxValue = Math.max(...datasets[0].data);

        
        ctx.clearRect(0, 0, width, height);

       
        this.drawGridLines(ctx, width, height, maxValue);

       
        ctx.strokeStyle = this.options.color || 'blue';
        ctx.lineWidth = 2;
        ctx.beginPath();
        datasets[0].data.forEach((value, index) => {
            const x = (index / (datasets[0].data.length - 1)) * width;
            const y = height - (value / maxValue) * (height - 40) - 20;
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();

        
        datasets[0].data.forEach((value, index) => {
            const x = (index / (datasets[0].data.length - 1)) * width;
            const y = height - (value / maxValue) * (height - 40) - 20;

            
            ctx.fillStyle = this.options.color || 'blue';
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fill();

            
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(value, x, y - 10);

           
            ctx.fillText(labels[index], x, height - 5);
        });
    }

    drawGridLines(ctx, width, height, maxValue) {
        const numberOfLines = 5;
        ctx.strokeStyle = '#e0e0e0';
        ctx.beginPath();
        for (let i = 0; i <= numberOfLines; i++) {
            const y = (i / numberOfLines) * (height - 40) + 20;
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();

            
            ctx.fillStyle = 'black';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round((maxValue / numberOfLines) * (numberOfLines - i)), width - 5, y - 2);
        }
        ctx.closePath();
    }
}

export default LineChart;
