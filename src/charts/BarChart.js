class BarChart {
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
        const barWidth = (width / datasets[0].data.length) - 20;

        
        ctx.clearRect(0, 0, width, height);

       
        this.drawGridLines(ctx, width, height, maxValue);

       
        datasets[0].data.forEach((value, index) => {
            const barHeight = (value / maxValue) * (height - 40); 
            ctx.fillStyle = this.options.color || 'blue';
            ctx.fillRect(index * (barWidth + 20), height - barHeight - 20, barWidth, barHeight);

           
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(value, index * (barWidth + 20) + barWidth / 2, height - barHeight - 25);

           
            ctx.fillText(labels[index], index * (barWidth + 20) + barWidth / 2, height - 5);
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

export default BarChart;
