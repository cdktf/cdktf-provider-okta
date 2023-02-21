# `policyProfileEnrollmentApps` Submodule <a name="`policyProfileEnrollmentApps` Submodule" id="@cdktf/provider-okta.policyProfileEnrollmentApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyProfileEnrollmentApps <a name="PolicyProfileEnrollmentApps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps okta_policy_profile_enrollment_apps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyProfileEnrollmentApps(Construct Scope, string Id, PolicyProfileEnrollmentAppsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig">PolicyProfileEnrollmentAppsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig">PolicyProfileEnrollmentAppsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetApps` <a name="ResetApps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetApps"></a>

```csharp
private void ResetApps()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyProfileEnrollmentApps.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyProfileEnrollmentApps.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyProfileEnrollmentApps.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.defaultPolicyId">DefaultPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.appsInput">AppsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.apps">Apps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultPolicyId`<sup>Required</sup> <a name="DefaultPolicyId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.defaultPolicyId"></a>

```csharp
public string DefaultPolicyId { get; }
```

- *Type:* string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.appsInput"></a>

```csharp
public string[] AppsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.apps"></a>

```csharp
public string[] Apps { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyProfileEnrollmentAppsConfig <a name="PolicyProfileEnrollmentAppsConfig" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyProfileEnrollmentAppsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicyId,
    string[] Apps = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.policyId">PolicyId</a></code> | <code>string</code> | ID of the enrollment policy. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.apps">Apps</a></code> | <code>string[]</code> | List of app IDs to be added to this policy. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

ID of the enrollment policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#policy_id PolicyProfileEnrollmentApps#policy_id}

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.apps"></a>

```csharp
public string[] Apps { get; set; }
```

- *Type:* string[]

List of app IDs to be added to this policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#apps PolicyProfileEnrollmentApps#apps}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



