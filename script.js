function calculate() {
    // Get input values
    const f1 = parseFloat((document.getElementById('FCM1000').value)) || 0;
    const f1v = parseFloat((document.getElementById('rsFCM1000').value) )|| 0;

    const f2 = parseFloat((document.getElementById('FCM500').value)) || 0;
    const f2v = parseFloat((document.getElementById('rsFCM500').value)) || 0;

    const f3 = parseFloat((document.getElementById('FCM130').value) )|| 0;
    const f3v = parseFloat((document.getElementById('rsFCM130').value)) || 0;

    const s1 = parseFloat((document.getElementById('SM500').value)) || 0;
    const s1v = parseFloat((document.getElementById('rsSM500').value)) || 0;

    const s2 = parseFloat((document.getElementById('SM140').value)) || 0;
    const s2v = parseFloat((document.getElementById('rsSM140').value)) || 0;

    const c1 = parseFloat((document.getElementById('Curd1000').value)) || 0;
    const c1v = parseFloat((document.getElementById('rsCurd1000').value)) || 0;

    const c2 = parseFloat((document.getElementById('Curd450').value) )|| 0;
    const c2v = parseFloat((document.getElementById('rsCurd450').value)) || 0;

    const c3 = parseFloat((document.getElementById('Curd150').value)) || 0;
    console.log(c3);
    const c3v = parseFloat((document.getElementById('rsCurd150').value)) || 0;
console.log(c3v);
    const totalAmount = (f1 * f1v) + (f2 * f2v) + (f3 * f3v) + (s1 * s1v) + (s2 * s2v) + (c1 * c1v) + (c2 * c2v) + (c3 * c3v);

    // Display result
    document.getElementById('result').innerText = `Total Sales: ${totalAmount}`;

    // Clear input fields
    document.getElementById('FCM1000').value = '';
    document.getElementById('rsFCM1000').value = '';
    document.getElementById('FCM500').value = '';
    document.getElementById('rsFCM500').value = '';
    document.getElementById('FCM130').value = '';
    document.getElementById('rsFCM130').value = '';
    document.getElementById('SM500').value = '';
    document.getElementById('rsSM500').value = '';
    document.getElementById('SM140').value = '';
    document.getElementById('rsSM140').value = '';
    document.getElementById('Curd1000').value = '';
    document.getElementById('rsCurd1000').value = '';
    document.getElementById('Curd450').value = '';
    document.getElementById('rsCurd450').value = '';
    document.getElementById('Curd150').value = '';
    document.getElementById('rsCurd150').value = '';
}