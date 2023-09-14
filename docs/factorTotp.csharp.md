# `okta_factor_totp`

Refer to the Terraform Registory for docs: [`okta_factor_totp`](https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp).

# `factorTotp` Submodule <a name="`factorTotp` Submodule" id="@cdktf/provider-okta.factorTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FactorTotp <a name="FactorTotp" id="@cdktf/provider-okta.factorTotp.FactorTotp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp okta_factor_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new FactorTotp(Construct Scope, string Id, FactorTotpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig">FactorTotpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig">FactorTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetClockDriftInterval">ResetClockDriftInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetHmacAlgorithm">ResetHmacAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetOtpLength">ResetOtpLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetSharedSecretEncoding">ResetSharedSecretEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetTimeStep">ResetTimeStep</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.factorTotp.FactorTotp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.factorTotp.FactorTotp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.factorTotp.FactorTotp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClockDriftInterval` <a name="ResetClockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetClockDriftInterval"></a>

```csharp
private void ResetClockDriftInterval()
```

##### `ResetHmacAlgorithm` <a name="ResetHmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetHmacAlgorithm"></a>

```csharp
private void ResetHmacAlgorithm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOtpLength` <a name="ResetOtpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetOtpLength"></a>

```csharp
private void ResetOtpLength()
```

##### `ResetSharedSecretEncoding` <a name="ResetSharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetSharedSecretEncoding"></a>

```csharp
private void ResetSharedSecretEncoding()
```

##### `ResetTimeStep` <a name="ResetTimeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetTimeStep"></a>

```csharp
private void ResetTimeStep()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

FactorTotp.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

FactorTotp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

FactorTotp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftIntervalInput">ClockDriftIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithmInput">HmacAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLengthInput">OtpLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncodingInput">SharedSecretEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStepInput">TimeStepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftInterval">ClockDriftInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithm">HmacAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLength">OtpLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncoding">SharedSecretEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStep">TimeStep</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClockDriftIntervalInput`<sup>Optional</sup> <a name="ClockDriftIntervalInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftIntervalInput"></a>

```csharp
public double ClockDriftIntervalInput { get; }
```

- *Type:* double

---

##### `HmacAlgorithmInput`<sup>Optional</sup> <a name="HmacAlgorithmInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithmInput"></a>

```csharp
public string HmacAlgorithmInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OtpLengthInput`<sup>Optional</sup> <a name="OtpLengthInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLengthInput"></a>

```csharp
public double OtpLengthInput { get; }
```

- *Type:* double

---

##### `SharedSecretEncodingInput`<sup>Optional</sup> <a name="SharedSecretEncodingInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncodingInput"></a>

```csharp
public string SharedSecretEncodingInput { get; }
```

- *Type:* string

---

##### `TimeStepInput`<sup>Optional</sup> <a name="TimeStepInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStepInput"></a>

```csharp
public double TimeStepInput { get; }
```

- *Type:* double

---

##### `ClockDriftInterval`<sup>Required</sup> <a name="ClockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftInterval"></a>

```csharp
public double ClockDriftInterval { get; }
```

- *Type:* double

---

##### `HmacAlgorithm`<sup>Required</sup> <a name="HmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithm"></a>

```csharp
public string HmacAlgorithm { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OtpLength`<sup>Required</sup> <a name="OtpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLength"></a>

```csharp
public double OtpLength { get; }
```

- *Type:* double

---

##### `SharedSecretEncoding`<sup>Required</sup> <a name="SharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncoding"></a>

```csharp
public string SharedSecretEncoding { get; }
```

- *Type:* string

---

##### `TimeStep`<sup>Required</sup> <a name="TimeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStep"></a>

```csharp
public double TimeStep { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FactorTotpConfig <a name="FactorTotpConfig" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new FactorTotpConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double ClockDriftInterval = null,
    string HmacAlgorithm = null,
    string Id = null,
    double OtpLength = null,
    string SharedSecretEncoding = null,
    double TimeStep = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.name">Name</a></code> | <code>string</code> | Factor name. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.clockDriftInterval">ClockDriftInterval</a></code> | <code>double</code> | Clock drift interval. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.hmacAlgorithm">HmacAlgorithm</a></code> | <code>string</code> | Hash-based message authentication code algorithm. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp#id FactorTotp#id}. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.otpLength">OtpLength</a></code> | <code>double</code> | Factor name. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.sharedSecretEncoding">SharedSecretEncoding</a></code> | <code>string</code> | Shared secret encoding. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.timeStep">TimeStep</a></code> | <code>double</code> | Time step in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Factor name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp#name FactorTotp#name}

---

##### `ClockDriftInterval`<sup>Optional</sup> <a name="ClockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.clockDriftInterval"></a>

```csharp
public double ClockDriftInterval { get; set; }
```

- *Type:* double

Clock drift interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp#clock_drift_interval FactorTotp#clock_drift_interval}

---

##### `HmacAlgorithm`<sup>Optional</sup> <a name="HmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.hmacAlgorithm"></a>

```csharp
public string HmacAlgorithm { get; set; }
```

- *Type:* string

Hash-based message authentication code algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp#hmac_algorithm FactorTotp#hmac_algorithm}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp#id FactorTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OtpLength`<sup>Optional</sup> <a name="OtpLength" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.otpLength"></a>

```csharp
public double OtpLength { get; set; }
```

- *Type:* double

Factor name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp#otp_length FactorTotp#otp_length}

---

##### `SharedSecretEncoding`<sup>Optional</sup> <a name="SharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.sharedSecretEncoding"></a>

```csharp
public string SharedSecretEncoding { get; set; }
```

- *Type:* string

Shared secret encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp#shared_secret_encoding FactorTotp#shared_secret_encoding}

---

##### `TimeStep`<sup>Optional</sup> <a name="TimeStep" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.timeStep"></a>

```csharp
public double TimeStep { get; set; }
```

- *Type:* double

Time step in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/factor_totp#time_step FactorTotp#time_step}

---



