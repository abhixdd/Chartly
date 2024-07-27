class PieChart {
    constructor(context, data, options) {
        this.ctx = context;
        this.data = data;
        this.options = options || {};
    }

    draw() {
        const ctx = this.ctx;
        const { datasets } = this.data;
        const { width, height } = ctx.canvas;
        const total = datasets[0].data.reduce((sum, value) => sum + value, 0);
        let startAngle = 0;

        
        ctx.clearRect(0, 0, width, height);

        
        datasets[0].data.forEach((value, index) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            const endAngle = startAngle + sliceAngle;

            ctx.fillStyle = this.options.colors ? this.options.colors[index % this.options.colors.length] : `hsl(${index * 60}, 70%, 50%)`;
            ctx.beginPath();
            ctx.moveTo(width / 2, height / 2);
            ctx.arc(width / 2, height / 2, Math.min(width, height) / 2, startAngle, endAngle);
            ctx.closePath();
            ctx.fill();

           
            const midAngle = startAngle + sliceAngle / 2;
            const labelX = width / 2 + (Math.cos(midAngle) * width) / 4;
            const labelY = height / 2 + (Math.sin(midAngle) * height) / 4;
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(value, labelX, labelY);

            startAngle = endAngle;
        });
    }
}

export default PieChart;
