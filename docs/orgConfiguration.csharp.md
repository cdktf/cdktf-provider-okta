# `orgConfiguration` Submodule <a name="`orgConfiguration` Submodule" id="@cdktf/provider-okta.orgConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgConfiguration <a name="OrgConfiguration" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration okta_org_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OrgConfiguration(Construct Scope, string Id, OrgConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig">OrgConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig">OrgConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetBillingContactUser">ResetBillingContactUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetEndUserSupportHelpUrl">ResetEndUserSupportHelpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOptOutCommunicationEmails">ResetOptOutCommunicationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetSupportPhoneNumber">ResetSupportPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetTechnicalContactUser">ResetTechnicalContactUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetWebsite">ResetWebsite</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetBillingContactUser` <a name="ResetBillingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetBillingContactUser"></a>

```csharp
private void ResetBillingContactUser()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetEndUserSupportHelpUrl` <a name="ResetEndUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetEndUserSupportHelpUrl"></a>

```csharp
private void ResetEndUserSupportHelpUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetOptOutCommunicationEmails` <a name="ResetOptOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOptOutCommunicationEmails"></a>

```csharp
private void ResetOptOutCommunicationEmails()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetSupportPhoneNumber` <a name="ResetSupportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetSupportPhoneNumber"></a>

```csharp
private void ResetSupportPhoneNumber()
```

##### `ResetTechnicalContactUser` <a name="ResetTechnicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetTechnicalContactUser"></a>

```csharp
private void ResetTechnicalContactUser()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetWebsite"></a>

```csharp
private void ResetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrgConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OrgConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OrgConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OrgConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OrgConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrgConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrgConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrgConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrgConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.subdomain">Subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUserInput">BillingContactUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyNameInput">CompanyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrlInput">EndUserSupportHelpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmailsInput">OptOutCommunicationEmailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumberInput">SupportPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUserInput">TechnicalContactUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.websiteInput">WebsiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUser">BillingContactUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrl">EndUserSupportHelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmails">OptOutCommunicationEmails</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumber">SupportPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUser">TechnicalContactUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.website">Website</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.subdomain"></a>

```csharp
public string Subdomain { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `BillingContactUserInput`<sup>Optional</sup> <a name="BillingContactUserInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUserInput"></a>

```csharp
public string BillingContactUserInput { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyNameInput"></a>

```csharp
public string CompanyNameInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `EndUserSupportHelpUrlInput`<sup>Optional</sup> <a name="EndUserSupportHelpUrlInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrlInput"></a>

```csharp
public string EndUserSupportHelpUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `OptOutCommunicationEmailsInput`<sup>Optional</sup> <a name="OptOutCommunicationEmailsInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmailsInput"></a>

```csharp
public object OptOutCommunicationEmailsInput { get; }
```

- *Type:* object

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SupportPhoneNumberInput`<sup>Optional</sup> <a name="SupportPhoneNumberInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumberInput"></a>

```csharp
public string SupportPhoneNumberInput { get; }
```

- *Type:* string

---

##### `TechnicalContactUserInput`<sup>Optional</sup> <a name="TechnicalContactUserInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUserInput"></a>

```csharp
public string TechnicalContactUserInput { get; }
```

- *Type:* string

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.websiteInput"></a>

```csharp
public string WebsiteInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `BillingContactUser`<sup>Required</sup> <a name="BillingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUser"></a>

```csharp
public string BillingContactUser { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `EndUserSupportHelpUrl`<sup>Required</sup> <a name="EndUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrl"></a>

```csharp
public string EndUserSupportHelpUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `OptOutCommunicationEmails`<sup>Required</sup> <a name="OptOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmails"></a>

```csharp
public object OptOutCommunicationEmails { get; }
```

- *Type:* object

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SupportPhoneNumber`<sup>Required</sup> <a name="SupportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumber"></a>

```csharp
public string SupportPhoneNumber { get; }
```

- *Type:* string

---

##### `TechnicalContactUser`<sup>Required</sup> <a name="TechnicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUser"></a>

```csharp
public string TechnicalContactUser { get; }
```

- *Type:* string

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.website"></a>

```csharp
public string Website { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgConfigurationConfig <a name="OrgConfigurationConfig" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OrgConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompanyName,
    string Address1 = null,
    string Address2 = null,
    string BillingContactUser = null,
    string City = null,
    string Country = null,
    string EndUserSupportHelpUrl = null,
    string Id = null,
    string Logo = null,
    object OptOutCommunicationEmails = null,
    string PhoneNumber = null,
    string PostalCode = null,
    string State = null,
    string SupportPhoneNumber = null,
    string TechnicalContactUser = null,
    string Website = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.companyName">CompanyName</a></code> | <code>string</code> | Name of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address1">Address1</a></code> | <code>string</code> | Primary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address2">Address2</a></code> | <code>string</code> | Secondary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.billingContactUser">BillingContactUser</a></code> | <code>string</code> | User ID representing the billing contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.city">City</a></code> | <code>string</code> | City of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.country">Country</a></code> | <code>string</code> | Country of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.endUserSupportHelpUrl">EndUserSupportHelpUrl</a></code> | <code>string</code> | Support link of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#id OrgConfiguration#id}. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.logo">Logo</a></code> | <code>string</code> | Logo of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.optOutCommunicationEmails">OptOutCommunicationEmails</a></code> | <code>object</code> | Indicates whether the org's users receive Okta Communication emails. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.postalCode">PostalCode</a></code> | <code>string</code> | Postal code of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.state">State</a></code> | <code>string</code> | State of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.supportPhoneNumber">SupportPhoneNumber</a></code> | <code>string</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.technicalContactUser">TechnicalContactUser</a></code> | <code>string</code> | User ID representing the technical contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.website">Website</a></code> | <code>string</code> | The org's website. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.companyName"></a>

```csharp
public string CompanyName { get; set; }
```

- *Type:* string

Name of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#company_name OrgConfiguration#company_name}

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Primary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#address_1 OrgConfiguration#address_1}

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Secondary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#address_2 OrgConfiguration#address_2}

---

##### `BillingContactUser`<sup>Optional</sup> <a name="BillingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.billingContactUser"></a>

```csharp
public string BillingContactUser { get; set; }
```

- *Type:* string

User ID representing the billing contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#billing_contact_user OrgConfiguration#billing_contact_user}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

City of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#city OrgConfiguration#city}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Country of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#country OrgConfiguration#country}

---

##### `EndUserSupportHelpUrl`<sup>Optional</sup> <a name="EndUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.endUserSupportHelpUrl"></a>

```csharp
public string EndUserSupportHelpUrl { get; set; }
```

- *Type:* string

Support link of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#end_user_support_help_url OrgConfiguration#end_user_support_help_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#id OrgConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Logo of org.

The file must be in PNG, JPG, or GIF format and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#logo OrgConfiguration#logo}

---

##### `OptOutCommunicationEmails`<sup>Optional</sup> <a name="OptOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.optOutCommunicationEmails"></a>

```csharp
public object OptOutCommunicationEmails { get; set; }
```

- *Type:* object

Indicates whether the org's users receive Okta Communication emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#opt_out_communication_emails OrgConfiguration#opt_out_communication_emails}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#phone_number OrgConfiguration#phone_number}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Postal code of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#postal_code OrgConfiguration#postal_code}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

State of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#state OrgConfiguration#state}

---

##### `SupportPhoneNumber`<sup>Optional</sup> <a name="SupportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.supportPhoneNumber"></a>

```csharp
public string SupportPhoneNumber { get; set; }
```

- *Type:* string

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#support_phone_number OrgConfiguration#support_phone_number}

---

##### `TechnicalContactUser`<sup>Optional</sup> <a name="TechnicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.technicalContactUser"></a>

```csharp
public string TechnicalContactUser { get; set; }
```

- *Type:* string

User ID representing the technical contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#technical_contact_user OrgConfiguration#technical_contact_user}

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.website"></a>

```csharp
public string Website { get; set; }
```

- *Type:* string

The org's website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/org_configuration#website OrgConfiguration#website}

---



