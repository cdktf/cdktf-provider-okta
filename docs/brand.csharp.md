# `okta_brand`

Refer to the Terraform Registory for docs: [`okta_brand`](https://www.terraform.io/docs/providers/okta/r/brand).

# `brand` Submodule <a name="`brand` Submodule" id="@cdktf/provider-okta.brand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Brand <a name="Brand" id="@cdktf/provider-okta.brand.Brand"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/brand okta_brand}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.brand.Brand.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new Brand(Construct Scope, string Id, BrandConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.brand.BrandConfig">BrandConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.brand.BrandConfig">BrandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy">ResetAgreeToCustomPrivacyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetBrandId">ResetBrandId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl">ResetCustomPrivacyPolicyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta">ResetRemovePoweredByOkta</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.brand.Brand.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.brand.Brand.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.brand.Brand.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.brand.Brand.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAgreeToCustomPrivacyPolicy` <a name="ResetAgreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy"></a>

```csharp
private void ResetAgreeToCustomPrivacyPolicy()
```

##### `ResetBrandId` <a name="ResetBrandId" id="@cdktf/provider-okta.brand.Brand.resetBrandId"></a>

```csharp
private void ResetBrandId()
```

##### `ResetCustomPrivacyPolicyUrl` <a name="ResetCustomPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl"></a>

```csharp
private void ResetCustomPrivacyPolicyUrl()
```

##### `ResetRemovePoweredByOkta` <a name="ResetRemovePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta"></a>

```csharp
private void ResetRemovePoweredByOkta()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.brand.Brand.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Brand.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.brand.Brand.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.brand.Brand.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Brand.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.brand.Brand.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.brand.Brand.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Brand.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.brand.Brand.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.links">Links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput">AgreeToCustomPrivacyPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandIdInput">BrandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput">CustomPrivacyPolicyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput">RemovePoweredByOktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy">AgreeToCustomPrivacyPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl">CustomPrivacyPolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta">RemovePoweredByOkta</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.brand.Brand.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.brand.Brand.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.brand.Brand.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.brand.Brand.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.brand.Brand.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.brand.Brand.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.brand.Brand.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.brand.Brand.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.brand.Brand.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.brand.Brand.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.brand.Brand.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.brand.Brand.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-okta.brand.Brand.property.links"></a>

```csharp
public string Links { get; }
```

- *Type:* string

---

##### `AgreeToCustomPrivacyPolicyInput`<sup>Optional</sup> <a name="AgreeToCustomPrivacyPolicyInput" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput"></a>

```csharp
public object AgreeToCustomPrivacyPolicyInput { get; }
```

- *Type:* object

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.brand.Brand.property.brandIdInput"></a>

```csharp
public string BrandIdInput { get; }
```

- *Type:* string

---

##### `CustomPrivacyPolicyUrlInput`<sup>Optional</sup> <a name="CustomPrivacyPolicyUrlInput" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput"></a>

```csharp
public string CustomPrivacyPolicyUrlInput { get; }
```

- *Type:* string

---

##### `RemovePoweredByOktaInput`<sup>Optional</sup> <a name="RemovePoweredByOktaInput" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput"></a>

```csharp
public object RemovePoweredByOktaInput { get; }
```

- *Type:* object

---

##### `AgreeToCustomPrivacyPolicy`<sup>Required</sup> <a name="AgreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy"></a>

```csharp
public object AgreeToCustomPrivacyPolicy { get; }
```

- *Type:* object

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.brand.Brand.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

##### `CustomPrivacyPolicyUrl`<sup>Required</sup> <a name="CustomPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl"></a>

```csharp
public string CustomPrivacyPolicyUrl { get; }
```

- *Type:* string

---

##### `RemovePoweredByOkta`<sup>Required</sup> <a name="RemovePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta"></a>

```csharp
public object RemovePoweredByOkta { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.brand.Brand.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BrandConfig <a name="BrandConfig" id="@cdktf/provider-okta.brand.BrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.brand.BrandConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BrandConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AgreeToCustomPrivacyPolicy = null,
    string BrandId = null,
    string CustomPrivacyPolicyUrl = null,
    object RemovePoweredByOkta = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy">AgreeToCustomPrivacyPolicy</a></code> | <code>object</code> | Consent for updating the custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.brandId">BrandId</a></code> | <code>string</code> | Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl">CustomPrivacyPolicyUrl</a></code> | <code>string</code> | Custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta">RemovePoweredByOkta</a></code> | <code>object</code> | Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.brand.BrandConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.brand.BrandConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.brand.BrandConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.brand.BrandConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.brand.BrandConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.brand.BrandConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.brand.BrandConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AgreeToCustomPrivacyPolicy`<sup>Optional</sup> <a name="AgreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy"></a>

```csharp
public object AgreeToCustomPrivacyPolicy { get; set; }
```

- *Type:* object

Consent for updating the custom privacy policy URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}

---

##### `BrandId`<sup>Optional</sup> <a name="BrandId" id="@cdktf/provider-okta.brand.BrandConfig.property.brandId"></a>

```csharp
public string BrandId { get; set; }
```

- *Type:* string

Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source.

Do this by setting brand_id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#brand_id Brand#brand_id}

---

##### `CustomPrivacyPolicyUrl`<sup>Optional</sup> <a name="CustomPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl"></a>

```csharp
public string CustomPrivacyPolicyUrl { get; set; }
```

- *Type:* string

Custom privacy policy URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}

---

##### `RemovePoweredByOkta`<sup>Optional</sup> <a name="RemovePoweredByOkta" id="@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta"></a>

```csharp
public object RemovePoweredByOkta { get; set; }
```

- *Type:* object

Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#remove_powered_by_okta Brand#remove_powered_by_okta}

---



